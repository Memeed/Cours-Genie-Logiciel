import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Tile from './Tile.vue'

describe('Tile', () => {
  it('should have orange/amber background when value is 2', () => {
    const wrapper = mount(Tile, {
      props: {
        value: 2
      }
    })

    // Le composant Tile utilise bg-amber-100 pour la valeur 2
    expect(wrapper.classes()).toContain('bg-amber-100')
  })

  it('should have different background when value is 4', () => {
    const wrapper = mount(Tile, {
      props: {
        value: 4
      }
    })

    // Le composant Tile utilise bg-amber-200 pour la valeur 4
    expect(wrapper.classes()).toContain('bg-amber-200')
    expect(wrapper.classes()).not.toContain('bg-amber-100')
  })

  it('should display the value correctly', () => {
    const wrapper = mount(Tile, {
      props: {
        value: 2
      }
    })

    expect(wrapper.text()).toBe('2')
  })

  it('should not display anything when value is 0', () => {
    const wrapper = mount(Tile, {
      props: {
        value: 0
      }
    })

    expect(wrapper.text()).toBe('')
  })
})
