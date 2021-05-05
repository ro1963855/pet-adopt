export default function useFilterHelper() {
  function collectSingleOption(pet, collection, targets) {
    if (collection.findIndex(collect => collect.value === pet[target]) === -1) {
      const value = getDeepValue(pet, targets)
      collection.push({
        label: value,
        value,
      })
    }
  }

  function collectMultipleOption(pet, collection, groupTargets, memberTargets) {
    let group = collection.find(type => type.label === pet[groupTarget])
    const value = getDeepValue(pet, groupTargets)
    if (group === undefined) {
      group = {
        label: value,
        options: [],
      }

      collection.push(group)
    }

    collectSingleOption(pet, group.options, memberTargets)
  }

  function sortSingleOptions(a, b) {
    if (a.value < b.value) {
      return -1
    }
    if (a.value > b.value) {
      return 1
    }

    return 0
  }

  function getDeepValue(obj, targets) {
    return targets.reduce((accumulator, current) => accumulator[current], obj)
  }

  return {
    collectSingleOption,
    collectMultipleOption,
    sortSingleOptions,
  }
}