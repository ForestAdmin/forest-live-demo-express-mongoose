### Introduction

This live demo allows you to build a Express/Mongoose app in less than 2 minutes, *provided* that you have `git` and `docker-compose` (18.06.0+) installed.

&nbsp;

## Step 1: Clone the repository

```
git clone https://github.com/ForestAdmin/forest-live-demo-express-mongoose.git
```

## Step 2: Run the following command

```
docker-compose up
```

## Step 3: Go to [your Forest Admin panel](http://app.forestadmin.com/39718)

Make sure you wait for the "Your Forest Admin panel is available at..." message to appear. You can't miss it! ;)

&nbsp;
&nbsp;

### Appendix: Want to browse your mongodb data?

Execute the following commands:
```
docker exec -it forest_mongoose_db bash
```
Then, from the container:
```
mongo -u forest -p secret forest_mongoose_demo
```