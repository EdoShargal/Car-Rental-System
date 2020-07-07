using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public abstract class BaseLogic : IDisposable
    {
        protected CarRentalDBEntities DB = new CarRentalDBEntities();

        public void Dispose()
        {
            DB.Dispose();
        }
    }
}
