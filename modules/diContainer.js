const parseFunction = require("parse-function");

const app = parseFunction({
  ecmaVersion: 2017,
});

module.exports = () => {
  const dependencies = {};
  const factories = {};
  const diContainer = {};
  diContainer.register = (name, dependency) => {
    dependencies[name] = dependency;
  };

  diContainer.factory = (name, factory) => {
    factories[name] = factory;
  };

  diContainer.get = (name) => {
    if (!dependencies[name]) {
      const factory = factories[name];
      dependencies[name] = factory && diContainer.inject(factory);
      if (!dependencies[name]) throw new Error(`Cannot find module ${name}`);
    }

    return dependencies[name];
  };

  diContainer.inject = (factory) => {
    const fnArgs = app
      .parse(factory)
      .args.map((dependency) => diContainer.get(dependency));

    return factory.apply(null, fnArgs);
  };

  return diContainer;
};
