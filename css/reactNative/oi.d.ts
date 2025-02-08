import { TextStyle } from 'react-native';

export type oiIconNames = 'accessibility-16' | 'accessibility-24' | 'accessibility-inset-16' | 'accessibility-inset-24' | 'ai-model-16' | 'ai-model-24' | 'alert-16' | 'alert-24' | 'alert-fill-12' | 'alert-fill-16' | 'alert-fill-24' | 'apps-16' | 'apps-24' | 'archive-16' | 'archive-24' | 'arrow-both-16' | 'arrow-both-24' | 'arrow-down-16' | 'arrow-down-24' | 'arrow-down-left-16' | 'arrow-down-left-24' | 'arrow-down-right-16' | 'arrow-down-right-24' | 'arrow-left-16' | 'arrow-left-24' | 'arrow-right-16' | 'arrow-right-24' | 'arrow-switch-16' | 'arrow-switch-24' | 'arrow-up-16' | 'arrow-up-24' | 'arrow-up-left-16' | 'arrow-up-left-24' | 'arrow-up-right-16' | 'arrow-up-right-24' | 'beaker-16' | 'beaker-24' | 'bell-16' | 'bell-24' | 'bell-fill-16' | 'bell-fill-24' | 'bell-slash-16' | 'bell-slash-24' | 'blocked-16' | 'blocked-24' | 'bold-16' | 'bold-24' | 'book-16' | 'book-24' | 'bookmark-16' | 'bookmark-24' | 'bookmark-fill-24' | 'bookmark-filled-16' | 'bookmark-slash-16' | 'bookmark-slash-24' | 'bookmark-slash-fill-16' | 'bookmark-slash-fill-24' | 'briefcase-16' | 'briefcase-24' | 'broadcast-16' | 'broadcast-24' | 'browser-16' | 'browser-24' | 'bug-16' | 'bug-24' | 'cache-16' | 'cache-24' | 'calendar-16' | 'calendar-24' | 'check-16' | 'check-24' | 'check-circle-16' | 'check-circle-24' | 'check-circle-fill-12' | 'check-circle-fill-16' | 'check-circle-fill-24' | 'checkbox-16' | 'checkbox-24' | 'checklist-16' | 'checklist-24' | 'chevron-down-12' | 'chevron-down-16' | 'chevron-down-24' | 'chevron-left-12' | 'chevron-left-16' | 'chevron-left-24' | 'chevron-right-12' | 'chevron-right-16' | 'chevron-right-24' | 'chevron-up-12' | 'chevron-up-16' | 'chevron-up-24' | 'circle-16' | 'circle-24' | 'circle-slash-16' | 'circle-slash-24' | 'clock-16' | 'clock-24' | 'clock-fill-16' | 'clock-fill-24' | 'cloud-16' | 'cloud-24' | 'cloud-offline-16' | 'cloud-offline-24' | 'code-16' | 'code-24' | 'code-of-conduct-16' | 'code-of-conduct-24' | 'code-review-16' | 'code-review-24' | 'code-square-16' | 'code-square-24' | 'codescan-16' | 'codescan-24' | 'codescan-checkmark-16' | 'codescan-checkmark-24' | 'codespaces-16' | 'codespaces-24' | 'columns-16' | 'columns-24' | 'command-palette-16' | 'command-palette-24' | 'comment-16' | 'comment-24' | 'comment-discussion-16' | 'comment-discussion-24' | 'container-16' | 'container-24' | 'copilot-16' | 'copilot-24' | 'copilot-48' | 'copilot-96' | 'copilot-error-16' | 'copilot-warning-16' | 'copy-16' | 'copy-24' | 'cpu-16' | 'cpu-24' | 'credit-card-16' | 'credit-card-24' | 'cross-reference-16' | 'cross-reference-24' | 'dash-16' | 'dash-24' | 'database-16' | 'database-24' | 'dependabot-16' | 'dependabot-24' | 'desktop-download-16' | 'desktop-download-24' | 'device-camera-16' | 'device-camera-24' | 'device-camera-video-16' | 'device-camera-video-24' | 'device-desktop-16' | 'device-desktop-24' | 'device-mobile-16' | 'device-mobile-24' | 'devices-16' | 'devices-24' | 'diamond-16' | 'diamond-24' | 'diff-16' | 'diff-24' | 'diff-added-16' | 'diff-added-24' | 'diff-ignored-16' | 'diff-ignored-24' | 'diff-modified-16' | 'diff-modified-24' | 'diff-removed-16' | 'diff-removed-24' | 'diff-renamed-16' | 'diff-renamed-24' | 'discussion-closed-16' | 'discussion-closed-24' | 'discussion-duplicate-16' | 'discussion-duplicate-24' | 'discussion-outdated-16' | 'discussion-outdated-24' | 'dot-16' | 'dot-24' | 'dot-fill-16' | 'dot-fill-24' | 'download-16' | 'download-24' | 'duplicate-16' | 'duplicate-24' | 'ellipsis-16' | 'ellipsis-24' | 'eye-16' | 'eye-24' | 'eye-closed-16' | 'eye-closed-24' | 'feed-discussion-16' | 'feed-forked-16' | 'feed-heart-16' | 'feed-issue-closed-16' | 'feed-issue-draft-16' | 'feed-issue-open-16' | 'feed-issue-reopen-16' | 'feed-merged-16' | 'feed-person-16' | 'feed-plus-16' | 'feed-public-16' | 'feed-pull-request-closed-16' | 'feed-pull-request-draft-16' | 'feed-pull-request-open-16' | 'feed-repo-16' | 'feed-rocket-16' | 'feed-star-16' | 'feed-tag-16' | 'feed-trophy-16' | 'file-16' | 'file-24' | 'file-added-16' | 'file-added-24' | 'file-badge-16' | 'file-badge-24' | 'file-binary-16' | 'file-binary-24' | 'file-code-16' | 'file-code-24' | 'file-diff-16' | 'file-diff-24' | 'file-directory-16' | 'file-directory-24' | 'file-directory-fill-16' | 'file-directory-fill-24' | 'file-directory-open-fill-16' | 'file-directory-open-fill-24' | 'file-directory-symlink-16' | 'file-directory-symlink-24' | 'file-media-16' | 'file-media-24' | 'file-moved-16' | 'file-moved-24' | 'file-removed-16' | 'file-removed-24' | 'file-submodule-16' | 'file-submodule-24' | 'file-symlink-file-16' | 'file-symlink-file-24' | 'file-zip-16' | 'file-zip-24' | 'filter-16' | 'filter-24' | 'filter-remove-16' | 'filter-remove-24' | 'fiscal-host-16' | 'fiscal-host-24' | 'flame-16' | 'flame-24' | 'fold-16' | 'fold-24' | 'fold-down-16' | 'fold-down-24' | 'fold-up-16' | 'fold-up-24' | 'gear-16' | 'gear-24' | 'gift-16' | 'gift-24' | 'git-branch-16' | 'git-branch-24' | 'git-commit-16' | 'git-commit-24' | 'git-compare-16' | 'git-compare-24' | 'git-merge-16' | 'git-merge-24' | 'git-merge-queue-16' | 'git-merge-queue-24' | 'git-pull-request-16' | 'git-pull-request-24' | 'git-pull-request-closed-16' | 'git-pull-request-closed-24' | 'git-pull-request-draft-16' | 'git-pull-request-draft-24' | 'globe-16' | 'globe-24' | 'goal-16' | 'goal-24' | 'grabber-16' | 'grabber-24' | 'graph-16' | 'graph-24' | 'hash-16' | 'hash-24' | 'heading-16' | 'heading-24' | 'heart-16' | 'heart-24' | 'heart-fill-16' | 'heart-fill-24' | 'history-16' | 'history-24' | 'home-16' | 'home-24' | 'home-fill-16' | 'home-fill-24' | 'horizontal-rule-16' | 'horizontal-rule-24' | 'hourglass-16' | 'hourglass-24' | 'hubot-16' | 'hubot-24' | 'id-badge-16' | 'id-badge-24' | 'image-16' | 'image-24' | 'inbox-16' | 'inbox-24' | 'infinity-16' | 'infinity-24' | 'info-16' | 'info-24' | 'issue-closed-16' | 'issue-closed-24' | 'issue-draft-16' | 'issue-draft-24' | 'issue-opened-16' | 'issue-opened-24' | 'issue-reopened-16' | 'issue-reopened-24' | 'issue-tracked-by-16' | 'issue-tracked-by-24' | 'issue-tracks-16' | 'issue-tracks-24' | 'italic-16' | 'italic-24' | 'iterations-16' | 'iterations-24' | 'kebab-horizontal-16' | 'kebab-horizontal-24' | 'key-16' | 'key-24' | 'key-asterisk-16' | 'key-asterisk-24' | 'law-16' | 'law-24' | 'light-bulb-16' | 'light-bulb-24' | 'link-16' | 'link-24' | 'link-external-16' | 'link-external-24' | 'list-ordered-16' | 'list-ordered-24' | 'list-unordered-16' | 'list-unordered-24' | 'location-16' | 'location-24' | 'lock-16' | 'lock-24' | 'log-16' | 'log-24' | 'logo-gist-16' | 'logo-gist-24' | 'logo-github-16' | 'logo-github-24' | 'mail-16' | 'mail-24' | 'mark-github-16' | 'mark-github-24' | 'markdown-16' | 'markdown-24' | 'megaphone-16' | 'megaphone-24' | 'mention-16' | 'mention-24' | 'meter-16' | 'meter-24' | 'milestone-16' | 'milestone-24' | 'mirror-16' | 'mirror-24' | 'moon-16' | 'moon-24' | 'mortar-board-16' | 'mortar-board-24' | 'move-to-bottom-16' | 'move-to-bottom-24' | 'move-to-end-16' | 'move-to-end-24' | 'move-to-start-16' | 'move-to-start-24' | 'move-to-top-16' | 'move-to-top-24' | 'multi-select-16' | 'multi-select-24' | 'mute-16' | 'mute-24' | 'no-entry-16' | 'no-entry-24' | 'no-entry-fill-12' | 'north-star-16' | 'north-star-24' | 'note-16' | 'note-24' | 'number-16' | 'number-24' | 'organization-16' | 'organization-24' | 'package-16' | 'package-24' | 'package-dependencies-16' | 'package-dependencies-24' | 'package-dependents-16' | 'package-dependents-24' | 'paintbrush-16' | 'paintbrush-24' | 'paper-airplane-16' | 'paper-airplane-24' | 'paperclip-16' | 'paperclip-24' | 'passkey-fill-16' | 'passkey-fill-24' | 'paste-16' | 'paste-24' | 'pencil-16' | 'pencil-24' | 'people-16' | 'people-24' | 'person-16' | 'person-24' | 'person-add-16' | 'person-add-24' | 'person-fill-16' | 'person-fill-24' | 'pin-16' | 'pin-24' | 'pin-slash-16' | 'pin-slash-24' | 'pivot-column-16' | 'pivot-column-24' | 'play-16' | 'play-24' | 'plug-16' | 'plug-24' | 'plus-16' | 'plus-24' | 'plus-circle-16' | 'plus-circle-24' | 'project-16' | 'project-24' | 'project-roadmap-16' | 'project-roadmap-24' | 'project-symlink-16' | 'project-symlink-24' | 'project-template-16' | 'project-template-24' | 'pulse-16' | 'pulse-24' | 'question-16' | 'question-24' | 'quote-16' | 'quote-24' | 'read-16' | 'read-24' | 'redo-16' | 'redo-24' | 'rel-file-path-16' | 'rel-file-path-24' | 'reply-16' | 'reply-24' | 'repo-16' | 'repo-24' | 'repo-clone-16' | 'repo-clone-24' | 'repo-delete-24' | 'repo-deleted-16' | 'repo-forked-16' | 'repo-forked-24' | 'repo-locked-16' | 'repo-locked-24' | 'repo-pull-16' | 'repo-pull-24' | 'repo-push-16' | 'repo-push-24' | 'repo-template-16' | 'repo-template-24' | 'report-16' | 'report-24' | 'rocket-16' | 'rocket-24' | 'rows-16' | 'rows-24' | 'rss-16' | 'rss-24' | 'ruby-16' | 'ruby-24' | 'screen-full-16' | 'screen-full-24' | 'screen-normal-16' | 'screen-normal-24' | 'search-16' | 'search-24' | 'server-16' | 'server-24' | 'share-16' | 'share-24' | 'share-android-16' | 'share-android-24' | 'shield-16' | 'shield-24' | 'shield-check-16' | 'shield-check-24' | 'shield-lock-16' | 'shield-lock-24' | 'shield-slash-16' | 'shield-slash-24' | 'shield-x-16' | 'shield-x-24' | 'sidebar-collapse-16' | 'sidebar-collapse-24' | 'sidebar-expand-16' | 'sidebar-expand-24' | 'sign-in-16' | 'sign-in-24' | 'sign-out-16' | 'sign-out-24' | 'single-select-16' | 'single-select-24' | 'skip-16' | 'skip-24' | 'skip-fill-16' | 'skip-fill-24' | 'sliders-16' | 'sliders-24' | 'smiley-16' | 'smiley-24' | 'sort-asc-16' | 'sort-asc-24' | 'sort-desc-16' | 'sort-desc-24' | 'sparkle-fill-16' | 'sparkle-fill-24' | 'sparkles-fill-16' | 'sparkles-fill-24' | 'sponsor-tiers-16' | 'sponsor-tiers-24' | 'square-16' | 'square-24' | 'square-circle-16' | 'square-circle-24' | 'square-fill-16' | 'square-fill-24' | 'squirrel-16' | 'squirrel-24' | 'stack-16' | 'stack-24' | 'star-16' | 'star-24' | 'star-fill-16' | 'star-fill-24' | 'stop-16' | 'stop-24' | 'stopwatch-16' | 'stopwatch-24' | 'strikethrough-16' | 'strikethrough-24' | 'sun-16' | 'sun-24' | 'sync-16' | 'sync-24' | 'tab-16' | 'tab-24' | 'tab-external-16' | 'tab-external-24' | 'table-16' | 'table-24' | 'tag-16' | 'tag-24' | 'tasklist-16' | 'tasklist-24' | 'telescope-16' | 'telescope-24' | 'telescope-fill-16' | 'telescope-fill-24' | 'terminal-16' | 'terminal-24' | 'three-bars-16' | 'three-bars-24' | 'thumbsdown-16' | 'thumbsdown-24' | 'thumbsup-16' | 'thumbsup-24' | 'tools-16' | 'tools-24' | 'tracked-by-closed-completed-16' | 'tracked-by-closed-completed-24' | 'tracked-by-closed-not-planned-16' | 'tracked-by-closed-not-planned-24' | 'trash-16' | 'trash-24' | 'triangle-down-16' | 'triangle-down-24' | 'triangle-left-16' | 'triangle-left-24' | 'triangle-right-16' | 'triangle-right-24' | 'triangle-up-16' | 'triangle-up-24' | 'trophy-16' | 'trophy-24' | 'typography-16' | 'typography-24' | 'undo-16' | 'undo-24' | 'unfold-16' | 'unfold-24' | 'unlink-16' | 'unlink-24' | 'unlock-16' | 'unlock-24' | 'unmute-16' | 'unmute-24' | 'unread-16' | 'unread-24' | 'unverified-16' | 'unverified-24' | 'upload-16' | 'upload-24' | 'verified-16' | 'verified-24' | 'versions-16' | 'versions-24' | 'video-16' | 'video-24' | 'webhook-16' | 'workflow-16' | 'workflow-24' | 'x-12' | 'x-16' | 'x-24' | 'x-circle-16' | 'x-circle-24' | 'x-circle-fill-12' | 'x-circle-fill-16' | 'x-circle-fill-24' | 'zap-16' | 'zap-24' | 'zoom-in-16' | 'zoom-in-24' | 'zoom-out-16' | 'zoom-out-24'

export interface oiProps extends Omit<TextStyle, 'fontFamily' | 'fontStyle' | 'fontWeight'> {
  iconName: oiIconNames
}

export declare const oi: (props: oiProps) => JSX.Element;
