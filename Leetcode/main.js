function reducerFn(arr, init) {
  arr.forEach((e) => {
    init += e;
    return init;
  });
  console.log(init);
}
reducerFn([1, 2, 3, 4], 100);
