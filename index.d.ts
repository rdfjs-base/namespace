import { NamedNode } from 'rdf-js';

interface NamespaceBuilder {
  (property: TemplateStringsArray): NamedNode;
  (property: string): NamedNode;
  [property: string]: NamedNode;
}

import Factory = require('@rdfjs/data-model');

interface BuilderOptions {
  factory?: typeof Factory;
}

declare function namespace(baseIRI: string, options?: BuilderOptions): NamespaceBuilder;

export = namespace
