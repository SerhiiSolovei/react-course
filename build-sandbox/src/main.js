class App {
  run = async (name) => {
    console.log(`Hello ${name}`);
    console.log([1,2,3,[4,5]].flat());
  };
};

const app = new App();
app.run('World')
  .then(()=> console.log('done'))
  .catch(()=> console.log('Error'));
