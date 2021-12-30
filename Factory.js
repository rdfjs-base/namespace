import namespace from '@rdfjs/namespace'

class Factory {
  namespace (baseIRI) {
    return namespace(baseIRI, { factory: this })
  }
}

Factory.exports = ['namespace']

export default Factory
