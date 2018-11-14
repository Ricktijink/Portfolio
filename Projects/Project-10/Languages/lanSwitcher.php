<?php
	function setLanguage()
	{
		if(isset($_GET['lan']))
		{
			if($_GET['lan'] == 'eng')
			{
				require_once('Languages/eng.php');
			}
			else
			{
			 	require_once('Languages/nl.php');
			}
		}
		else
		{
			require_once('Languages/nl.php');
		}
	}
	setLanguage();
?>