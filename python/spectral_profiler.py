import argparse
from datetime import datetime
import logging
import json
import json_fingerprint
import os
import re
import yaml

def load_json_or_yaml(filepath):
    data = None
    if os.path.isfile(filepath):
        extension =  os.path.splitext(filepath)[1][1:]
        if extension in 'json':
            with open(filepath) as fp:
                data = json.load(fp)
        elif extension in 'yaml':
            with open(filepath) as fp:
                data = yaml.safe_load(fp)
        else:
            logging.error(f"Unsupported JSON/YAML file extension {extension}")
    else:
        logging.error(f"File {filepath} no found")
    return data

def load_ruleset(filepath):
    logging.debug(f"Loading ruleset from {filepath}")
    data = load_json_or_yaml(filepath)
    return data

def load_ruleset_metadata(filepath):
    logging.debug(f"Loading metadata from {filepath}")
    data = load_json_or_yaml(filepath)
    return data

def save_metadata(filepath, data):
    logging.debug(f"Saving metadata as {filepath}")
    with open(filepath,'w') as fp:
        yaml.dump(data, fp, sort_keys=False)

def get_fingerprint(data, hash_function='sha256', version=1):
    json_str = json.dumps(data)
    fingerprint = json_fingerprint.create(json_str, hash_function, version)
    return fingerprint

def profile_rule(rule):
    profile = {}
    return profile

def profile_ruleset(ruleset):
    ruleset_profile = {}
    ruleset_profile['profiledAt'] =  datetime.now().isoformat()
    ruleset_profile['fingerprint'] = get_fingerprint(ruleset)
    version, hash_function, hash = json_fingerprint.decode(ruleset_profile['fingerprint'])
    ruleset_profile['urn'] = f"postman:SpetralRuleset:{hash}"
    ruleset_profile['rules'] = {}
    for rule_id, rule in ruleset['rules'].items():
        rule_profile = {}
        rule_profile['fingerprint'] = get_fingerprint(rule)
        version, hash_function, hash = json_fingerprint.decode(rule_profile['fingerprint'])
        rule_profile['urn'] = f"postman:SpetralRule:{hash}"
        ruleset_profile['rules'][rule_id] = rule_profile
    return ruleset_profile

def main():
    # get metadata
    metadata_path = os.path.abspath(args.metafile)
    logging.info(f"Processing {metadata_path}")
    metadata = load_ruleset_metadata(metadata_path)
    metadata_dir = os.path.dirname(metadata_path)
    ruleset_metadata = metadata.get('ruleset')
    if ruleset_metadata:
        # get spectral ruleset
        ruleset_link = ruleset_metadata.get('link')
        if ruleset_link:
            if re.match(ruleset_link, 'https?://'):
                logging.error(f"URL link not yet supported")
                return
            else:
                if ruleset_link.startswith('/'):
                    ruleset_path = ruleset_link
                else:
                    ruleset_path = os.path.join(metadata_dir, ruleset_link)
                ruleset = load_ruleset(ruleset_path)
                profile = profile_ruleset(ruleset)
            # update metadata
            metadata['profile'] = profile
            save_metadata(metadata_path, metadata)
        else:
            logging.error(f"ruleset link not found in metadata")
    else:
        logging.error(f"ruleset not found in metadata")

if __name__ == '__main__':
    """Main"""
    script_dir = os.path.dirname(os.path.realpath(__file__))
    parser = argparse.ArgumentParser()
    parser.add_argument("metafile", help="The spectral ruleset metadata file")
    parser.add_argument("-ll","--loglevel", default='INFO', help="Log Level")
    args = parser.parse_args()
    print(args)

    loglevel = getattr(logging, args.loglevel.upper(), None)
    logging.basicConfig(format='%(asctime)s %(levelname)s: %(message)s', level=loglevel)

    main()
