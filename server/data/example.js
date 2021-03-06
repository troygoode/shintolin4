const ivorySpear = {
  name: 'ivory spear',
  plural: 'ivory spears',
  tags: ['weapon'],
  weight: 8,

  weapon_class: 'stab',
  break_odds: 0.0025,

  accuracy: (attacker, target, tile) => {
    let chance = 0.20
    if (attacker.skills.includes('spear_2')) {
      chance += 0.25
    }
    if (attacker.skills.includes('spear_4')) {
      chance += 0.25
    }
    return chance
  },

  damage: (attacker, target, tile) => {
    let dmg = 2
    if (attacker.skills.includes('spear_1')) {
      dmg += 3
    }
    if (attacker.skills.includes('spear_3')) {
      dmg += 3
    }
    return dmg
  },

  craft: (character, tile) => {
    return {
      takes: {
        ap: 15,
        tools: ['stone'],
        skill: 'carver',
        items: {
          ivory_tusk: 1,
          staff: 1,
          pelt_small: 1
        }
      },
      gives: {
        items: {
          spear_ivory: 1
        },
        xp: {
          crafter: 15
        }
      }
    }
  }
}

export default ivorySpear
