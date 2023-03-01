import argparse
import os
import logging

def main():
    pass

if __name__ == '__main__':
    """Main"""
    script_dir = os.path.dirname(os.path.realpath(__file__))
    parser = argparse.ArgumentParser()
    parser.add_argument("-ll","--loglevel", default='INFO', help="Log Level")
    args = parser.parse_args()
    print(args)

    loglevel = getattr(logging, args.loglevel.upper(), None)
    logging.basicConfig(format='%(asctime)s %(levelname)s: %(message)s', level=loglevel)
    
    main()
