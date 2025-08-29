import { describe, it, expect } from 'vitest'
import { limitText } from './limitText'

describe('limitText', () => {
  it('should return the full text if it is within the maxLength', () => {
    const result = limitText('Hello, World!', 20)
    expect(result).toBe('Hello, World!')
  })

  it('should truncate the text and add ellipsis if it exceeds maxLength', () => {
    const result = limitText(
      'This is a long text that needs to be truncated',
      30
    )
    expect(result).toBe('This is a long text that needs...')
  })
})
