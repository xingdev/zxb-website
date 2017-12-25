var action = (a) => {
  console.log(a)
}

function compose(funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

var middleWare1 = action => {
  next = (a) => {
    console.log(a)
  }
  next(action)
}

var middleWare2 = next => action => {
  next(action)
}

var action1 = middleWare1

middleWare1(1)


