namespace BLL
{
    class UsersLogic : BaseLogic
    {
        public UsersLogic()
        {
            // Get all orders: 
            public List<UserModel> GetAllOrders()
            {
                return DB.Users.Select(u =>
                    new UserModel
                    {
                        id = u.
                        custID = o.CustomerID,
                        date = o.OrderDate,
                        ship = o.ShipName
                    }).ToList();
            }

        }
    }
}