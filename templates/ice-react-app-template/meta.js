module.exports = {
  prompts: {
    title: {
      type: 'input',
      message: 'title',
      default: 'ice react admin',
      validate: (value) => {
        value = value.trim();
        if (!value) {
          return 'title cannot be empty';
        }
        return true;
      },
    },
    version: {
      type: 'string',
      required: true,
      message: 'version',
      default: '1.0.0',
    },
    description: {
      type: 'string',
      required: true,
      message: 'description',
      validate: (value) => {
        value = value.trim();
        if (!value) {
          return 'description cannot be empty';
        }
        return true;
      },
    },
  },
  completeMessage:
    'Next step: cd {your-scaffold-directory} && npm install && npm run start',
};
