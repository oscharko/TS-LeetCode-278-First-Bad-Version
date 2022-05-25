let isBadVersion: number = 5, n: number = 4

const solution = function(isBadVersion: Function) {
  return function(n: number): number {
    /*
    # Description for array v:
    #   - v[0] = left pointer
    #   - v[1] = n the versions of the application and also the left pointer
    #   - v[2] = middle element of the versions (v[1] - v[0]) / 2)
    */
    let v: number[] = [1, n, 0]
    while (v[0] < v[1]) {
      v[2] = v[0] + Math.floor((v[1] - v[0]) / 2)
      if (isBadVersion(v[2])) {
        v[1] = v[2]
      } else {
        v[0] = v[2] + 1
      }
    }
    return v[0]
  };
};