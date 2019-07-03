function getBlocks() {
  /**
   * Our moderately hacky way to get blocks around the site
   *
   * While this is technically an anti-pattern, it's more than sufficient for
   * this use case
   */
  const blockElements = document.querySelectorAll('[data-type="block"]')
  if (blockElements) {
    const blocks = Array.from(blockElements).map(el => {
      return { title: el.dataset.title, id: el.id }
    })
    return blocks
  }

  return []
}

export default getBlocks
