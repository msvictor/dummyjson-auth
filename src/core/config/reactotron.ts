import { Reactotron } from '~/libs';

if (__DEV__) {
  const vanillaConsoleLog = console.log;
  const vanillaConsoleError = console.error;

  const tronConsoleLog = (...args: any[]): void => {
    vanillaConsoleLog(...args);
    Reactotron.display({
      name: 'CONSOLE.LOG',
      important: true,
      value: args,
      preview: args.length ? JSON.stringify(args) : args[0],
    });
  };

  const tronConsoleError = (...args: any[]): void => {
    vanillaConsoleError(...args);
    Reactotron.display({
      name: 'CONSOLE.ERROR',
      important: true,
      value: args,
      preview: args.length ? JSON.stringify(args) : args[0],
    });
  };

  const tron = Reactotron.configure({ host: 'localhost' })
    .useReactNative()
    .connect();

  console.log = tronConsoleLog;
  console.error = tronConsoleError;
  console.tron = tron;
}
