import * as DataFactory from '@rdfjs/data-model';
import { NamedNode } from 'rdf-js';

interface NamespaceBuilder {
  (property: TemplateStringsArray): NamedNode;
  (property: string): NamedNode;
  readonly [property: string]: NamedNode;
}

interface BuilderOptions {
  factory?: typeof DataFactory;
}

declare function namespace(baseIRI: string, options?: BuilderOptions): NamespaceBuilder;

export = namespace
