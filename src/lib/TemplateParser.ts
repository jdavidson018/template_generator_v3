import type { Template } from '$lib/Templates';

export class TemplateParser {
    private text: string;
    private parameterValues: Map<string, string>;
    private parameterIndices: Map<string, Array<[number, number]>>;

    constructor(template: Template | undefined) {
        this.text = template?.text ?? '';
        this.parameterValues = new Map();
        this.parameterIndices = new Map();
        this.parseTemplate();
    }

    private parseTemplate(): void {
        const regex = /{([^}]+)}/g;
        let match;

        while ((match = regex.exec(this.text)) !== null) {
            const paramName = match[1].trim();
            const startIndex = match.index;
            const endIndex = regex.lastIndex;

            // Initialize parameter value if not exist
            if (!this.parameterValues.has(paramName)) {
                this.parameterValues.set(paramName, '');
            }

            // Add indices to parameterIndices
            if (!this.parameterIndices.has(paramName)) {
                this.parameterIndices.set(paramName, []);
            }
            this.parameterIndices.get(paramName)!.push([startIndex, endIndex]);
        }
    }

    public getParameters(): string[] {
        return Array.from(this.parameterValues.keys());
    }

    public setParameterValue(paramName: string, value: string): void {
        if (this.parameterValues.has(paramName)) {
            this.parameterValues.set(paramName, value);
        } else {
            throw new Error(`Parameter ${paramName} does not exist in the template.`);
        }
    }

    public getParameterValue(paramName: string): string | undefined {
        return this.parameterValues.get(paramName);
    }

    public getPopulatedText(): string {
        let result = this.text;
        
        // Collect all indices from all parameters
        const allIndices: Array<[number, number, string]> = [];
        for (const [param, indices] of this.parameterIndices) {
            for (const [start, end] of indices) {
                allIndices.push([start, end, param]);
            }
        }

        // Sort indices in descending order (to process from end to start)
        allIndices.sort((a, b) => b[0] - a[0]);

        // Process all parameters from end to start
        for (const [start, end, param] of allIndices) {
            const value = this.parameterValues.get(param) || `{${param}}`;
            result = result.slice(0, start) + value + result.slice(end);
        }

        return result;
    }
}