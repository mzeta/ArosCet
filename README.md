# GRUPO **AROSCET**
## Integrantes

Nombre | Legajo
------------ | -------------
_CETERI, Martín_ | _83002_
_AROSTEGUY, Nicolás_ | _80243_ 

## Descripción App: 
Aplicación de gestión de presupuesto y órdenes de trabajo.
Un presupuesto es asignado a una Empresa (cliente), una vez aceptado el mismo se genera una orden de trabajo (OT) asociada a ese presupuesto de ese cliente.
La OT es asignada a un usuario que es quien trabajará en la misma. La OT tendrá un flujo de estados desde New hasta Delivered


## APIS

**1. Órdenes de trabajo** Pertenecen a un Customer, estan relacionadas con un presupuesto y asignadas a un usuario
* _GET /api/v1/orders_
* _POST /api/v1/orders_
* _PUT /api/v1/orders/{order\_id}_
* _GET /api/v1/orders/{order\_id}_
* _DELETE /api/v1/orders/{order\_id}_

**2. Usuarios** a los que se les asigna las ordenes de trabajo
* _GET /api/v1/users_
* _GET /api/v1/users/orders_
* _POST /api/v1/users_
* _PUT /api/v1/users/{user\_id}_
* _GET /api/v1/users/{user\_id}_
* _DELETE /api/v1/users/{user\_id}_

**3. Clientes**, poseen una orden de trabajo que a su vez esta asociada a un quotes
* _GET /api/v1/customer_
* _GET /api/v1/customer/quotes_
* _POST /api/v1/customer_
* _PUT /api/v1/customer/{customer\_id}_
* _GET /api/v1/customer/{customer\_id}_
* _DELETE /api/v1/customer/{customer\_id}_

**4. Presupuesto** iniciado para una empresa particular, una vez aceptado se genera una orden de trabajo y se le asigna un usuario
* _GET /api/v1/quotes_
* _POST /api/v1/quotes_
* _PUT /api/v1/quotes/{quotes\_id}_
* _GET /api/v1/quotes/{quotes\_id}_
* _DELETE /api/v1/quotes/{quotes\_id}_
