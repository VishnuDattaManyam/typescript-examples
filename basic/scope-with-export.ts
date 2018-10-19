

// let variable: string[];

export const controller = {
    variable: <string[]>[],
    get: function () {
        return this.variable;
    },
    add: function (value: string) {
        this.variable.push(value);
    },
    set: function (newVariable: string[]) {
        (this.variable as string[]) = newVariable;
    }
};