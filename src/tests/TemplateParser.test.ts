import { describe, it, expect } from 'vitest';
import { TemplateParser } from '$lib/TemplateParser';

describe('TemplateParser', () => {
  it('should correctly parse parameters from a template', () => {
    const template = 'Hello, {name}! Welcome to {city}.';
    const parser = new TemplateParser(template);
    expect(parser.getParameters()).toEqual(['name', 'city']);
  });

  it('should handle templates with no parameters', () => {
    const template = 'This is a static template with no parameters.';
    const parser = new TemplateParser(template);
    expect(parser.getParameters()).toEqual([]);
  });

  it('should handle templates with repeated parameters', () => {
    const template = '{greeting}, {name}! {greeting} again, {name}!';
    const parser = new TemplateParser(template);
    expect(parser.getParameters()).toEqual(['greeting', 'name']);
  });

  it('should set and get parameter values correctly', () => {
    const template = 'Hello, {name}!';
    const parser = new TemplateParser(template);
    parser.setParameterValue('name', 'Alice');
    expect(parser.getParameterValue('name')).toBe('Alice');
  });

  it('should throw an error when setting a non-existent parameter', () => {
    const template = 'Hello, {name}!';
    const parser = new TemplateParser(template);
    expect(() => parser.setParameterValue('age', '30')).toThrow();
  });

  it('should return undefined for non-existent parameter values', () => {
    const template = 'Hello, {name}!';
    const parser = new TemplateParser(template);
    expect(parser.getParameterValue('age')).toBeUndefined();
  });

  it('should correctly populate the template with parameter values', () => {
    const template = 'Hello, {name}! Welcome to {city}.';
    const parser = new TemplateParser(template);
    parser.setParameterValue('name', 'Alice');
    parser.setParameterValue('city', 'Wonderland');
    expect(parser.getPopulatedText()).toBe('Hello, Alice! Welcome to Wonderland.');
  });

  it('should handle templates with multiple occurrences of the same parameter', () => {
    const template = '{greeting}, {name}! {greeting} again, {name}!';
    const parser = new TemplateParser(template);
    parser.setParameterValue('greeting', 'Hello');
    parser.setParameterValue('name', 'Bob');
    expect(parser.getPopulatedText()).toBe('Hello, Bob! Hello again, Bob!');
  });

  it('should leave parameters unchanged if no value is set', () => {
    const template = 'Hello, {name}! Welcome to {city}.';
    const parser = new TemplateParser(template);
    parser.setParameterValue('name', 'Charlie');
    expect(parser.getPopulatedText()).toBe('Hello, Charlie! Welcome to {city}.');
  });

  it('should handle templates with adjacent parameters', () => {
    const template = 'Hello, {firstName}{lastName}!';
    const parser = new TemplateParser(template);
    parser.setParameterValue('firstName', 'John');
    parser.setParameterValue('lastName', 'Doe');
    expect(parser.getPopulatedText()).toBe('Hello, JohnDoe!');
  });
});