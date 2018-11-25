const rcfile = require("rc-config-loader");

const getConfig = name => {
  const config = rcfile(name)
  
  return config
}

export default getConfig