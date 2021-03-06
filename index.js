module.exports = (obj) => {
  if (!obj.types || !Array.isArray(obj.types)) {
    throw new Error('types should be array.');
  }
  const types = obj.types.map(type => {
    const members = type.members.map(
      m => '\t\t<members>' + m + '</members>'
    ).join('\n');
    return `\t<types>
${members}
\t\t<name>${type.name}</name>
\t</types>`;
  }).join('\n');
  const version = obj.version || '35.0';
  return `<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
${ types }
\t<version>${ version }</version>
</Package>`;
};
