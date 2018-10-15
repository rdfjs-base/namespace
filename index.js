const rdf = require('@rdfjs/data-model')

function namespace (baseIRI, { factory = rdf } = {}) {
  const builder = term => factory.namedNode(`${baseIRI}${term.raw || term}`)

  if (!Proxy) {
    return builder
  }

  return new Proxy(() => {}, {
    apply: (target, thisArg, args) => builder(args[0]),
    get: (target, property) => builder(property)
  })
}

module.exports = namespace
