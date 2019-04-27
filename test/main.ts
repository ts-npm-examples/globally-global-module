import { describe, it } from 'mocha';
import { expect } from 'chai';

import { padRight, merge } from '../dist';

describe('pad right', () =>
{
    it('works for numbers', () =>
    {
        const a = 42;
        const b = padRight(a, 3, 0);
        expect(b).equals('420');
    });

    it('works for strings', () =>
    {
        const a = 'xD';
        const b = padRight(a, 6, 'D');
        expect(b).equals('xDDDDD');
    });
});

describe('merge and types', () =>
{
    it('just works', () =>
    {
        interface AA
        {
            a: 4;
            b?: 2;
        }

        const A: Explicit<AA> = { a: 4, b: 2 };
        const B = { foo: 'asdf' } as const;

        let C = merge(A, B);

        // expect(return type of merge).equals(type of D)
        const D: { a: 4, b: 2 | undefined, foo: 'asdf' } = C;
        C = D;

        expect(C).deep.equals({ a: 4, b: 2, foo: 'asdf' });
    });
});
