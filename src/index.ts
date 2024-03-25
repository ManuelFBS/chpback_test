import app from './app';

async function main() {
  try {
    const appListener = app.listen(app.get('port'), () => {
      console.log(
        `Server is running on port: ${app.get('port')}`,
      );
    });
  } catch (error) {
    console.error(error);
  }
}

main();
