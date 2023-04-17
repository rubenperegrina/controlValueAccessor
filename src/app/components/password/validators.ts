import { FormGroup } from '@angular/forms';

export function matchingInputsValidator(firstKey: string, secondKey: string) {
    return function (group: FormGroup): any {
        if (group.controls[firstKey].value !== group.controls[secondKey].value) {
            return {
                'missmatch': true
            };
        }
    };
}
