# **Next admin panel**
![Next admin panel](https://raw.githubusercontent.com/Chafik321/next-admin-panel/main/readmeData/1.png)

## **How To Setup**
- Download and unzip ( or pull )
- Install dependencies
```
npm i 
//or
npm install
//or
yarn install
//or
pnpm install
//or
'any other package manager name' install
```

- Add your mongodb connection string to the .env
```
DB_URI= // mongo db url
```

- Run the admin panel
```
npm run dev
//or
yarn dev
//or
pnpm dev
```

- Make Admin account
  
make a **post** request ( use postman ) to this EndPoint **http://localhost:3000/api/createFirstAdmin**
and then send the following data in the body
> body format must be x-www-form-urlencoded

```
{
    adminName,
    adminEmail,
    adminPassword
}
```
```diff
- remove this endpoint in production 
+ and use the safe endpoint insted by sending post request for /api/admins , auth is required
```


<br/>
<br/>


# **Fork or Follow , or both** 😁 <br/>
<br/>
<br/>



```diff
+ You have all the permission to add , edite , or remove a component 
```

<br/>

```diff
! Contact us if you founded a bug please
```

<br/>

```diff
+ you can lie and say that this dashboard is your own
```