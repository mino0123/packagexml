const assert = require('assert');
const packagexml = require('../index');

const ASSERT_XML1 = `<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>A</members>
		<members>B</members>
		<name>ApexClass</name>
	</types>
	<version>99.9</version>
</Package>`;

const ASSERT_XML2 = `<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">

	<version>35.0</version>
</Package>`;

describe('packagexml', function () {
  it('should return package.xml string', function () {
    const result = packagexml({
      types: [{
        name: 'ApexClass', members: ['A', 'B']
      }],
      version: '99.9'
    });
    assert.equal(result, ASSERT_XML1);
  });
  it('should return 35.0 to default version', function () {
    const result = packagexml({types: []});
    assert.equal(result, ASSERT_XML2);
  });
});
