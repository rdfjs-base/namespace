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

-declare function namespace(baseIRI: string, options?: BuilderOptions): NamespaceBuilder;
+export = namespace
