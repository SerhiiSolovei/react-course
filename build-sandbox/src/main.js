class App {
  run = async (name) => {
    console.log(`Hello ${name}`);
  };
};

const app = new App();
app.run('World')
  .then(()=> console.log('done'))
  .catch(()=> console.log('Error'));
