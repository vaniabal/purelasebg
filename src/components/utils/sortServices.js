const sortServices = function(services) {
  const servicesNoNode = services.map(({ node }) => ({ ...node }))
  function compare(a, b) {
    const serviceA = a.servicePosition || services.length
    const serviceB = b.servicePosition || services.lengths

    let comparison = 0
    if (serviceA > serviceB) {
      comparison = 1
    } else if (serviceA < serviceB) {
      comparison = -1
    }
    return comparison
  }

  return servicesNoNode.sort(compare)
}

export default sortServices
