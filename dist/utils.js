"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.perform_tasks = void 0;
function perform_tasks(tasks, context) {
    tasks.forEach(task => {
        const [_, __, ...types] = Object.keys(task);
        types.forEach(type => {
            const typeFn = tasksTypes[type];
            if (!typeFn) {
                throw new Error('unable to find task of type ' + type);
            }
            typeFn(task, context);
        });
    });
    return context;
}
exports.perform_tasks = perform_tasks;
function set(task, context) {
    if (!task.set) {
        return;
    }
    const source_name = Object.keys(task.set)[0];
    if (!source_name) {
        throw new Error('A source object is required when setting a target');
    }
    const target = context[task.on];
    const target_field = task.field;
    const source = context[source_name];
    const source_field = task.set[source_name];
    target[target_field] = source[source_field];
}
const tasksTypes = {
    set
};
//# sourceMappingURL=utils.js.map