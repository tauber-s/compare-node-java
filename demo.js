const simulateRequest = async id => {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await res.json();
  
  return data.title;
};

(async () => {
  console.time('[Nodejs] total time');

  const tasks = [];
  for (let i = 1; i <= 100; i++) {
    tasks.push(simulateRequest(i));
  }

  const results = await Promise.all(tasks);

  console.timeEnd('[Nodejs] total time');
})();