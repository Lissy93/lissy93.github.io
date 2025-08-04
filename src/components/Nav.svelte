<script lang="ts">
  import Icon from './Icon.svelte';

  let siteName = 'AS93';

  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname.includes('aliciasykes.com')) {
      siteName = 'Alicia Sykes';
    }
    else if (hostname.includes('lissy93.github.io')) {
      siteName = 'Lissy93';
    }
  }
</script>

<section>
  <a class="home" href="/" title="Awesome Source Ninety Three">
    <Icon name="terminal" width="1.8rem" height="1.8rem" color="var(--primary)" />
    <h1>{siteName}</h1>
  </a>
  <nav>
    <a href="https://aliciasykes.com/about">About</a>
    <a href="https://cv.aliciasykes.com">Resume</a>
    <a href="https://aliciasykes.com/blog">Blog</a>
    <!-- <a href="https://aliciasykes.com/projects">Projects</a> -->
    <a href="https://aliciasykes.com/contact">Contact</a>
  </nav>
</section>

<style lang="scss">
  section {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 0 1rem;
    gap: 1rem;
    flex-wrap: wrap;
    .home {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      h1 {
        margin: 0;
        font-family: var(--font-heading);
        color: var(--primary);
        transition: all 0.5s ease-in-out;
        text-shadow: 0 10px 10px rgba(99, 102, 241, 0.1);
        opacity: 0.85;
      }
      &:hover {
        text-decoration: none;
        h1 {
          text-shadow: 5px 15px 20px rgba(99, 102, 241, 0.35);
          opacity: 1;
        }
      }
    }
    nav {
      display: flex;
      gap: 1rem;
      height: fit-content;
      padding: 1rem 0;
      a {
        transition: all 0.2s ease-in-out;
        border-bottom: 3px solid transparent;
        &:hover {
          text-decoration: none;
          border-bottom: 3px solid var(--primary);
        }
      }
    }
  }
</style>
