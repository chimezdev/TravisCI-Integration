const studyTime = process.env.STUDY_TIME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Containers rule!');
    console.log(`My best time for study is ${studyTime}`);
    await sleep(5000);
  }
}

main();
