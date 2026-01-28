import { config } from '@vue/test-utils'
import { computed } from 'vue'

// Make Vue's reactivity APIs globally available
global.computed = computed

// Activer les auto-import stubs
config.global.stubs = {
  teleport: true
}
