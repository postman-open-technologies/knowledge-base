const fs = require('fs');
const YAML = require('yaml');

const YAMLfile = '../sql/postgres.yaml';

const questionsYAML = fs.readFileSync(YAMLfile, 'utf-8');
const questions = YAML.parse(questionsYAML).queries;

module.exports = questions.map(question => {
  return {
    id: Object.keys(question)[0],
    description: question.description,
    output: question.output,
    scope: question.scope
  };
});