import { NamedNode } from 'rdf-js';

interface NamespaceBuilder {
  (property: TemplateStringsArray): NamedNode;
  (property: string): NamedNode;
  [property: string]: NamedNode;
}

interface Factory {
  namedNode(value: string): NamedNode;
}

export interface BuilderOptions {
  factory?: Factory;
}

export default function namespace(baseIRI: string, options?: BuilderOptions): NamespaceBuilder;
