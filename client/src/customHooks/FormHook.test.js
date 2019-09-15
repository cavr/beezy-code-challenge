import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from './FormHook'

test('should filter by name', () => {
    const record = { 'id': 1, 'name': 'carlos' }

    const { result } = renderHook(() => useForm(record));

    act(() => {
        result.current.onChange({ target: { name: 'name', value: 'charlie' } });
        result.current.onChange({ target: { name: 'id', value: '2' } });
    })

    expect(result.current.values.name).toEqual('charlie');
    expect(result.current.values.id).toEqual('2');
});

