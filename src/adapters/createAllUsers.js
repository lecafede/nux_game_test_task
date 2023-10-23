const createPhoneNumber = (phoneNumber) => phoneNumber.split(' ')[0];
const createAddress = (address) => {
  const {
    city,
    suite,
    street,
    zipcode,
  } = address;

  return `${city}, ${suite}, ${street}, ${zipcode}`;
};

const createCompany = (company) => {
  const {
    bs,
    name,
    catchPhrase,
  } = company;

  return `${name}, ${bs}, ${catchPhrase}`;
};

const createAllUsers = (response) => {
  const { data } = response;

  return data.map(({
    phone,
    address,
    company,
    ...other
  }) => ({
    company: createCompany(company),
    address: createAddress(address),
    phone: createPhoneNumber(phone),
    ...other,
  }));
};

export default createAllUsers;
