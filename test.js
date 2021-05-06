describe('My Test Suite', () => {
    it('Test Case', () => {
      expect(true).toEqual(true);
    });
    it('Expect', () => {
      var a = 0
      expect(a == 0)
    });
    it('http Test', async () => {
      var http = require('axios');
      var q = await http.get("http://localhost:3000/")
      expect(q.status == 200)
      expect(q.data['yolo'] == 'hello')
    })
  });
