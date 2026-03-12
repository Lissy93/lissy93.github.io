<script lang="ts">
	import config from '../config';
	import Icon from './Icon.svelte';
</script>

<section>
	<div class="left">
		<h3>About</h3>
		<p>
			I'm <a href="https://aliciasykes.com">Alicia Sykes</a>
			(<a href="https://github.com/lissy93">Lissy93</a> on GitHub), a developer from London 🇬🇧
		</p>
		<p>I build free and open source software for the developers, and sometimes humans.</p>
		<p>
			My objective is to build tools that respect a user's privacy and are accessible to everyone. I
			have a particular interest in security, Linux and self-hosting. But also just love to build
			things that are fun and (sometimes, maybe) useful.
		</p>
		<p>
			I'm always up for learning new things and collaborating on projects, so feel free to reach out
			if you've got an idea you want to jam on!
		</p>

		<div class="socials">
			{#each config.socials as social}
				<a
					href={social.link + social.user}
					class="social-link"
					title={social.name}
					target="_blank"
					rel="noreferrer"
				>
					<Icon
						name={social.icon}
						color="var(--foreground)"
						width="1.8rem"
						height="1.8rem"
						hoverColor={social.tone}
					/>
				</a>
			{/each}
		</div>
	</div>
	<div class="right">
		<img class="pic" width="300" src="/profile.jpg" alt="Alicia Sykes" />
		<div class="links">
			{#each config.links as link}
				<a href={link.href}>{link.text}</a>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	section {
		padding: 1rem;
		border-radius: 0.5rem;
		background: var(--secondary);
		border: 1px solid #1e293bcc;
		transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.25s;
		margin: 2rem auto;
		display: flex;
		justify-content: center;
		gap: 1rem;
		box-shadow: 0 20px 20px -20px rgba(99, 102, 241, 0.2);
		@media (max-width: 600px) {
			flex-wrap: wrap;
		}
		h3 {
			font-size: 1.5rem;
			margin: 0;
		}
		p {
			font-size: 1.2rem;
		}
		.pic {
			border-radius: 8px;
			width: 15rem;
		}
		.socials,
		.links {
			a {
				text-decoration: none;
			}
			display: flex;
			flex-wrap: wrap;
			gap: 0.75rem;
			justify-content: center;
		}
		.links a {
			&:hover {
				color: var(--primary);
			}
		}
	}
</style>
