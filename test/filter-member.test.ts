import { filtterMember, longestName } from "./filter-member";

const listGuest = [
    { name: "Eric Jones", isMember: false },
    { name: "Paris Hilton", isMember: true },
    { name: "Angelina Jolie", isMember: true },
    { name: "Kayne West", isMember: false },
    { name: "Bob Ziroll", isMember: true },
  ];


  describe('Fillter Memember', ()=> {
    test('should filter member from list guest', () => {
        expect(filtterMember(listGuest)).toEqual(
            [
                { name: "Paris Hilton", isMember: true },
                { name: "Angelina Jolie", isMember: true },
                { name: "Bob Ziroll", isMember: true },
            ]
        )
    });

    test('should return longest name', () => {
        expect(longestName(listGuest)).toEqual('Angelina Jolie')
    });
  });
