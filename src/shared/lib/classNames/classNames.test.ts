import { classNames } from './classNames'

describe('classNames', () => {
  test('with only first parameter', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with extra classes (first and third parameters)', () => {
    const expectedResult = 'someClass class1 class2'
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
      expectedResult
    )
  })

  test('with mods (all parameters)', () => {
    const expectedResult =
      'someClass class1 class2 conditionClass conditionClass2'
    expect(
      classNames('someClass', { conditionClass: true, conditionClass2: true }, [
        'class1',
        'class2',
      ])
    ).toBe(expectedResult)
  })

  test('with one of mods false', () => {
    const expectedResult = 'someClass class1 class2 conditionClass'
    expect(
      classNames(
        'someClass',
        { conditionClass: true, conditionClass2: false },
        ['class1', 'class2']
      )
    ).toBe(expectedResult)
  })

  test('with one of mods undefined', () => {
    const expectedResult = 'someClass class1 class2 conditionClass'
    expect(
      classNames(
        'someClass',
        { conditionClass: true, conditionClass2: undefined },
        ['class1', 'class2']
      )
    ).toBe(expectedResult)
  })
})
