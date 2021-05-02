export default function useFilterHelper() {
  function collectSingleOption(pet, collection, target) {
    if (collection.findIndex(collect => collect.value === pet[target]) === -1) {
      collection.push({
        label: pet[target],
        value: pet[target],
      })
    }
  }

  function collectMultipleOption(pet, collection, groupTarget, memberTarget) {
    let group = collection.find(type => type.label === pet[groupTarget])
    if (group === undefined) {
      group = {
        label: pet[groupTarget],
        options: [],
      }

      collection.push(group)
    }

    collectSingleOption(pet, group.options, memberTarget)
  }

  function sortSingleOptions(a, b) {
    if (a.value < b.value) {
      return -1;
    }
    if (a.value > b.value) {
      return 1;
    }

    return 0;
  }

  return {
    collectSingleOption,
    collectMultipleOption,
    sortSingleOptions,
  }
}