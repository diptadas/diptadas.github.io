# diptadas.github.io

Personal website using Hugo, Github pages, and Github actions.

## Prerequisite

- Create a Github account
- Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Hugo](https://gohugo.io/getting-started/installing/)

## Steps

- Create a new Github repository named `{username}.github.io`

- Add a README and make an initial commit

- Clone the repository on your computer

```
$ cd Downloads
$ git clone git@github.com:diptadas/diptadas.github.io.git
```

- Initialize a new Hugo site in the same directory

```
$ cd Downloads
$ hugo new site diptadas.github.io --force
```

- Add a [theme](https://themes.gohugo.io/) using git submodule

```
$ git submodule add https://github.com/ojroques/hugo-researcher.git themes/researcher
```

- Copy and replace all files and folders from `themes/researcher/exampleSite` to the root folder

- Edit your details in `config.toml`,  `content/about.md`, and `content/contact.md` files

- Run following command and check website locally at http://localhost:1313/

```
$ hugo server
```

- Create a `.github/workflows/gh-pages.yaml` file in the root directory and copy contents from [here](https://gohugo.io/hosting-and-deployment/hosting-on-github/).

- Make a commit and push to Github

- Go to Github and check the status of the workflow on the `Actions` tab. It will publish the generated website on the `gh-pages` branch

- Go to `Settings > Pages > Source` and select the `gh-pages` branch

- Your website should be published at `{username}.github.io`