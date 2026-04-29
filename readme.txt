=== XO Event Calendar ===
Contributors: sato-jp
Tags: event,events,calendar,event calendar,events calendar
Requires at least: 4.9
Tested up to: 6.5
Requires PHP: 7.4
Stable tag: 3.3.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

XO Event Calendar is a simple event calendar plugin.

== Fork Information ==

This plugin is a fork of the original XO Event Calendar developed by Xakuro.
The original development has ended, and this fork is maintained by sato-jp.

* Original Plugin: https://xakuro.com/wordpress/xo-event-calendar/
* Original Author: Xakuro
* Fork Repository: https://github.com/sato-jp/xo-event-calendar

== Description ==

XO Event Calendar is a simple event calendar plugin.

= Functions =

* Adds an event custom post type and taxonomy.
* Supports custom post type template.
* Displays holiday on the calendar.
* Supports WordPress multisite.

= Operating environment =

The Blocks is available in WordPress version 5.8 and above.

== Installation ==

1. Upload the `xo-event-calendar` folder to the `/wp-content/plugins/` directory.
2. Activate the plugin through the Plugins menu in WordPress.

== Screenshots ==

1. Event calendar
2. Simple calendar
3. Edit event
4. Event category
5. Holidays setting

== Changelog ==

= 3.3.2 =
* Fixed multisite uninstall using wrong post type / taxonomy variables.
* Escaped event and holiday titles in calendar HTML; tightened caption date format handling.
* Removed inline onclick from calendar navigation (data attribute + delegated handler); dropped button onclick from allowed KSES.
* Capped public AJAX calendar parameters to reduce abuse; public requests still omit nonce by design.
* save_post now verifies post type and edit_post capability before saving event meta.
* Holiday settings submenu now defaults to manage_options; use filter `xo_event_calendar_holiday_setting_capability` to restore a looser capability (for example edit_pages).
* Raised minimum PHP to 7.4.

= 3.3.1 =
* Hardened widget setting sanitization and numeric range validation.

= 3.3.0 =
* Forked from original XO Event Calendar (v3.2.10) by Xakuro
* Maintenance continued by sato-jp

= 3.2.10 =
* Supported WordPress 6.5.
* Updated the apiVersion to 3.

= 3.2.9 =
* Fixed an issue where non-admin users received an error when setting up a calendar block.

= 3.2.8 =
* Fixed XSS vulnerability.
* Adhered WordPress coding standards 3.0.1.

= 3.2.7 =
* Fixed a bug in the display of the event calendar when "Specify initial display month" was specified.

= 3.2.6 =
* Changed so that columns in the event list on the management screen can be customized.
* Supported WordPress 6.4.

= 3.2.5 =
* Fixed a bug in the simple calendar.

= 3.2.4 =
* Fixed a bug with monthly feed in multiple months of the calendar.

= 3.2.3 =
* Fixed a bug that an error message may be displayed in the calendar widget.
* Supported WordPress 6.3.

= 3.2.2 =
* Fixed a bug in `xo_event_calendar` shortcode.

= 3.2.1 =
* Fixed a bug in the display of the simple calendar.
* Added parameters to `xo_event_field` shortcode.

= 3.2.0 =
* Added `xo_event_field` shortcode.

= 3.1.4 =
* Fixed a bug in the display of events in the calendar.

= 3.1.3 =
* Fixed a bug that a block error may occur in the calendar block.

= 3.1.2 =
* Fixed a bug that the time was initialized when editing an event post.

= 3.1.1 =
* Fixed a bug that caused an error message to appear in versions prior to PHP 7.3.

= 3.1.0 =
* Added option not to delete posts and settings data on uninstall.
* Supported WordPress 6.2.
* Bumped minimum PHP version to 7.0.
* Tweaked the CSS.

--------

[See the previous changelogs here](https://xakuro.com/wordpress/xo-event-calendar/#changelog)
