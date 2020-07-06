using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CarRentalApi.Models
{
    public class CarRentalsDB : DbContext
    {
        public CarRentalsDB() 
            : base("name=CarRentalsDB")
        { }

        public virtual DbSet<UserModel> Users { get; set; }
    }
}